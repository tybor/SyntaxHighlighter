;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var classes_keywords =	'indexing class deferred expanded separate end obsolete ';
        var inheritance_keywords = 'inherit insert creation feature rename redefine undefine select export ';
        var design_by_contract_keywords = 'require ensure check debug invariant variant rescue ';
        var features_body_keywords = 'local do once alias external attribute';
        var control_flow_keywords = 'if then else elseif when from until loop';
        var booleans_keywords = 'and or xor not implies ',
        this.regexList = [
        { regex: /--(.*)$/gm,                                                      css: 'comments' },
        { regex: new RegExp(this.getKeywords(classes_keywords), 'gmi'),		       css: 'keyword' }		// keyword
        { regex: new RegExp(this.getKeywords(inheritance_keywords), 'gmi'),		   css: 'keyword' }		// keyword
        { regex: new RegExp(this.getKeywords(design_by_contract_keywords), 'gmi'), css: 'color1' }		// keyword
        { regex: new RegExp(this.getKeywords(features_body_keywords), 'gmi'),      css: 'color2' }		// keyword
        { regex: new RegExp(this.getKeywords(control_flow_keywords), 'gmi'),       css: 'color1' }		// keyword
        { regex: new RegExp(this.getKeywords(booleans_keywords), 'gmi'),           css: 'color2' }		// keyword
    ];
    };

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['Eiffel', 'eiffel', 'e'];

	SyntaxHighlighter.brushes.Eiffel = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

