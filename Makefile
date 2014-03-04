PROJECT=TransitVis
DESCRIPTION=A GTFS Visualizer
ORGANIZATION=jocafa

STYLE_BUILDER=$(CURDIR)/node_modules/shoelace-stylus

include ./node_modules/simple-stack-ui/tasks.mk

GTFS_DATASETS=\
	utah-transit-authority


all: gtfs-data

# Data Targets ----------------------------------------------------------------
gtfs-data: $(addprefix gtfs-data/,$(GTFS_DATASETS))

gtfs-data/%:
	@mkdir -p $@
	@echo Downloading data for $(@F)...
	@curl -# -L http://www.gtfs-data-exchange.com/agency/$(@F)/latest.zip > tmp.zip
	@echo Extracting...
	@unzip tmp.zip -d $@
	@rm tmp.zip
	@echo


# Utility Targets ------------------------------------------------------------
clean: \
	clean-data

clean-data:
	@rm -rf ./gtfs-data

.PHONY: \
	all \
	clean \
	clean-data


