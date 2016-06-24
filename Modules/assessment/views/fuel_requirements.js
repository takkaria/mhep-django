console.log("debug fuel_requirements.js");

function fuel_requirements_UpdateUI()
{
    $("#energyrequirements").html("");
    for (z in data.energy_requirements)
    {
        $("#energyrequirements").append($("#energyrequirement-template").html());
        $("#energyrequirements [key='data.energy_requirements.template.name']").attr('key', 'data.energy_requirements.' + z + '.name');
        $("#energyrequirements [key='data.energy_requirements.template.quantity']").attr('key', 'data.energy_requirements.' + z + '.quantity');
        $("#energyrequirements [eid=template]").attr('eid', z);

        for (x in data.fuel_requirements[z])
            add_fuel_requirement(z, x);
    }

    $('#generation').html("");
    if (data.use_generation != 1) {
        $('#generation-container').hide();
        $("#fit_income").html('£0');
    }
    else {
        $('#generation-container').show();
        $("#fit_income").html('<b>£<span key="data.total_income" dp=0></span></b>');
        for (z in data.generation.systems) {
            $('#generation').append($('#suppliedby-generation-template').html());
            $("#generation [key='data.generation.template.x.name']").attr('key', 'data.generation.systems.' + z + '.name');
            $("#generation [key='data.generation.template.x.quantity']").attr('key', 'data.generation.systems.' + z + '.quantity');
            $("#generation [key='data.generation.template.x.CO2']").attr('key', 'data.generation.systems.' + z + '.CO2');
        }
    }

    $("#fuel_totals").html("");
    for (z in data.fuel_totals)
    {
        $("#fuel_totals").append($("#fuel_totals_template").html());
        $("#fuel_totals [key='data.fuel_totals.z.name']").attr('key', 'data.fuel_totals.' + z + '.name');
        $("#fuel_totals [key='data.fuel_totals.z.quantity']").attr('key', 'data.fuel_totals.' + z + '.quantity');
        $("#fuel_totals [key='data.fuel_totals.z.primaryenergy']").attr('key', 'data.fuel_totals.' + z + '.primaryenergy');
        $("#fuel_totals [key='data.fuel_totals.z.annualco2']").attr('key', 'data.fuel_totals.' + z + '.annualco2');

        $("#fuel_totals [key='data.fuel_totals.z.annualcost']").attr('key', 'data.fuel_totals.' + z + '.annualcost');
        $("#fuel_totals [key='data.fuels.f.standingcharge']").attr('key', 'data.fuels.' + z + '.standingcharge');

        $("#fuel_totals [key='data.fuels.f.fuelcost']").attr('key', 'data.fuels.' + z + '.fuelcost');
        $("#fuel_totals [key='data.fuels.f.primaryenergyfactor']").attr('key', 'data.fuels.' + z + '.primaryenergyfactor');
        $("#fuel_totals [key='data.fuels.f.co2factor']").attr('key', 'data.fuels.' + z + '.co2factor');
    }
}

function fuel_requirements_initUI()
{
    // Nothing
}

function add_fuel_requirement(z, x) // z = energy_requirement  --  x = fuel_requirement
{
    $("#energyrequirements").append($("#suppliedby-template").html());
    var prefixA = "#energyrequirements [key='data.fuel_requirements.template.x";
    var prefixB = 'data.fuel_requirements.' + z + '.' + x;
    
    $(prefixA + ".fuel']").attr('key', prefixB + '.fuel');
    $(prefixA + ".fraction']").attr('key', prefixB + '.fraction');
    $(prefixA + ".demand']").attr('key', prefixB + '.demand');
    $(prefixA + ".system_efficiency']").attr('key', prefixB + '.system_efficiency');
    $(prefixA + ".fuelinput']").attr('key', prefixB + '.fuelinput');

    if (z == 'solarpv' || z == 'wind' || z == 'hydro' || z == 'solarpv2') {
        $('#energyrequirements .fraction.template').html('');
        $('#energyrequirements .fraction.template').html('<span key="' + prefixB + '.fraction" style="margin-left:0px" dp="2" />');
        $('#energyrequirements .suppliedby-template-buttons').html('');
    }
    $('#energyrequirements .fraction.template').removeClass('template');
}