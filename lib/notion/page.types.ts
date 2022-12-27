export interface PageType {
	object:           string;
	id:               string;
	created_time:     string;
	last_edited_time: string;
	created_by:       TedBy;
	last_edited_by:   TedBy;
	cover:            Cover;
	icon:             null;
	parent:           Parent;
	archived:         boolean;
	properties:       Properties;
	url:              string;
}

export interface TedBy {
	object: string;
	id:     string;
}

export interface Parent {
	type:    string;
	page_id: string;
}

export interface Properties {
	title: PropertiesTitle;
}

export interface PropertiesTitle {
	id:    string;
	type:  string;
	title: TitleElement[];
}

export interface TitleElement {
	type:        string;
	text:        Text;
	annotations: Annotations;
	plain_text:  string;
	href:        null;
}

export interface Annotations {
	bold:          boolean;
	italic:        boolean;
	strikethrough: boolean;
	underline:     boolean;
	code:          boolean;
	color:         string;
}

export interface Text {
	content: string;
	link:    null;
}

export interface Cover {
	type: string,
	external: {
		url: string
	}
}