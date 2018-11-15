var familyTree = {
	name: 'root',
	children: [
				{
					name: 'child1', 
					children: [
					{
						name: 'child1.1', 
						children: []
					}
					] 
				},
				{
					name: 'child2',
					children: [
						{
							name: 'child2.1', 
							children:[]
						}, 
						{	
							name: 'child2.2', 
							children:[
								{
									name: 'child2.2.1', 
									children:[]
								}
							]								
						}
					]
				}
			]
	};

function createTree(obj) {	
	document.write('<ul>' + '<li>' + obj.name + '</li>');
		if (obj.children.length !== 0) {			
			for (var i = 0; i < obj.children.length; i++) {
					createTree(obj.children[i]);
					document.write('</ul>');
				}
		} 
}
createTree(familyTree);
