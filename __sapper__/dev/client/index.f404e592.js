import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.63e0f952.js';

/* src\routes\index.svelte generated by Svelte v3.18.2 */

const file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
	let t0;
	let section0;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let section1;
	let div2;
	let h3;
	let t5;
	let t6;
	let p0;
	let t7;
	let t8;
	let br;
	let t9;
	let div9;
	let div6;
	let a0;
	let div3;
	let span0;
	let i0;
	let t10;
	let h40;
	let t11;
	let t12;
	let p1;
	let t13;
	let t14;
	let a1;
	let div4;
	let span1;
	let i1;
	let t15;
	let h41;
	let t16;
	let t17;
	let p2;
	let t18;
	let t19;
	let a2;
	let div5;
	let span2;
	let i2;
	let t20;
	let h42;
	let t21;
	let t22;
	let p3;
	let t23;
	let t24;
	let div8;
	let a3;
	let div7;
	let h43;
	let t25;
	let t26;
	let p4;
	let t27;
	let t28;
	let section2;
	let div13;
	let div12;
	let div10;
	let p5;
	let span3;
	let t29;
	let t30;
	let span4;
	let t31;
	let t32;
	let div11;

	const block = {
		c: function create() {
			t0 = space();
			section0 = element("section");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Dibumi.Com");
			t2 = space();
			h2 = element("h2");
			t3 = text("Menyelesaikan persoalan di indonesia lewat berbagai macam produk dan layanan");
			t4 = space();
			section1 = element("section");
			div2 = element("div");
			h3 = element("h3");
			t5 = text("Produk Kami");
			t6 = space();
			p0 = element("p");
			t7 = text("Beragam produk dan layanan dibuat oleh kami");
			t8 = space();
			br = element("br");
			t9 = space();
			div9 = element("div");
			div6 = element("div");
			a0 = element("a");
			div3 = element("div");
			span0 = element("span");
			i0 = element("i");
			t10 = space();
			h40 = element("h4");
			t11 = text("BayarCepat");
			t12 = space();
			p1 = element("p");
			t13 = text("Layanan keuangan yang membantu hidupmu menjadi lebih sempurna");
			t14 = space();
			a1 = element("a");
			div4 = element("div");
			span1 = element("span");
			i1 = element("i");
			t15 = space();
			h41 = element("h4");
			t16 = text("Toko Dibumi");
			t17 = space();
			p2 = element("p");
			t18 = text("Buat toko online pribadimu dalam hitungan detik saja");
			t19 = space();
			a2 = element("a");
			div5 = element("div");
			span2 = element("span");
			i2 = element("i");
			t20 = space();
			h42 = element("h4");
			t21 = text("Uranus Equity");
			t22 = space();
			p3 = element("p");
			t23 = text("Layanan Urun Dana yang fokus untuk ekspansi bisnis UKM");
			t24 = space();
			div8 = element("div");
			a3 = element("a");
			div7 = element("div");
			h43 = element("h4");
			t25 = text("Masih Berjuang");
			t26 = space();
			p4 = element("p");
			t27 = text("Perjuangan Kami belum selesai, tunggu produk selanjutnya");
			t28 = space();
			section2 = element("section");
			div13 = element("div");
			div12 = element("div");
			div10 = element("div");
			p5 = element("p");
			span3 = element("span");
			t29 = text("Menjadi Partner?");
			t30 = space();
			span4 = element("span");
			t31 = text("Hubungi Kami rudi@dibumi.com");
			t32 = space();
			div11 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1q2vvqn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section0 = claim_element(nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div1 = claim_element(section0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Dibumi.Com");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Menyelesaikan persoalan di indonesia lewat berbagai macam produk dan layanan");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div2 = claim_element(section1_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h3 = claim_element(div2_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t5 = claim_text(h3_nodes, "Produk Kami");
			h3_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t7 = claim_text(p0_nodes, "Beragam produk dan layanan dibuat oleh kami");
			p0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t8 = claim_space(section1_nodes);
			br = claim_element(section1_nodes, "BR", {});
			t9 = claim_space(section1_nodes);
			div9 = claim_element(section1_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div6 = claim_element(div9_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			a0 = claim_element(div6_nodes, "A", { class: true, href: true, target: true });
			var a0_nodes = children(a0);
			div3 = claim_element(a0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			span0 = claim_element(div3_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			i0 = claim_element(span0_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			span0_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);
			h40 = claim_element(div3_nodes, "H4", { class: true });
			var h40_nodes = children(h40);
			t11 = claim_text(h40_nodes, "BayarCepat");
			h40_nodes.forEach(detach_dev);
			t12 = claim_space(div3_nodes);
			p1 = claim_element(div3_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t13 = claim_text(p1_nodes, "Layanan keuangan yang membantu hidupmu menjadi lebih sempurna");
			p1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t14 = claim_space(div6_nodes);
			a1 = claim_element(div6_nodes, "A", { class: true, href: true, target: true });
			var a1_nodes = children(a1);
			div4 = claim_element(a1_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span1 = claim_element(div4_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			i1 = claim_element(span1_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			span1_nodes.forEach(detach_dev);
			t15 = claim_space(div4_nodes);
			h41 = claim_element(div4_nodes, "H4", { class: true });
			var h41_nodes = children(h41);
			t16 = claim_text(h41_nodes, "Toko Dibumi");
			h41_nodes.forEach(detach_dev);
			t17 = claim_space(div4_nodes);
			p2 = claim_element(div4_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t18 = claim_text(p2_nodes, "Buat toko online pribadimu dalam hitungan detik saja");
			p2_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t19 = claim_space(div6_nodes);
			a2 = claim_element(div6_nodes, "A", { class: true, target: true });
			var a2_nodes = children(a2);
			div5 = claim_element(a2_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			span2 = claim_element(div5_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			i2 = claim_element(span2_nodes, "I", { class: true });
			children(i2).forEach(detach_dev);
			span2_nodes.forEach(detach_dev);
			t20 = claim_space(div5_nodes);
			h42 = claim_element(div5_nodes, "H4", { class: true });
			var h42_nodes = children(h42);
			t21 = claim_text(h42_nodes, "Uranus Equity");
			h42_nodes.forEach(detach_dev);
			t22 = claim_space(div5_nodes);
			p3 = claim_element(div5_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t23 = claim_text(p3_nodes, "Layanan Urun Dana yang fokus untuk ekspansi bisnis UKM");
			p3_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t24 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			a3 = claim_element(div8_nodes, "A", { class: true, href: true, target: true });
			var a3_nodes = children(a3);
			div7 = claim_element(a3_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			h43 = claim_element(div7_nodes, "H4", { class: true });
			var h43_nodes = children(h43);
			t25 = claim_text(h43_nodes, "Masih Berjuang");
			h43_nodes.forEach(detach_dev);
			t26 = claim_space(div7_nodes);
			p4 = claim_element(div7_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t27 = claim_text(p4_nodes, "Perjuangan Kami belum selesai, tunggu produk selanjutnya");
			p4_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);
			section2 = claim_element(nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			div13 = claim_element(section2_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div10 = claim_element(div12_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p5 = claim_element(div10_nodes, "P", {});
			var p5_nodes = children(p5);
			span3 = claim_element(p5_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t29 = claim_text(span3_nodes, "Menjadi Partner?");
			span3_nodes.forEach(detach_dev);
			p5_nodes.forEach(detach_dev);
			t30 = claim_space(div10_nodes);
			span4 = claim_element(div10_nodes, "SPAN", { class: true });
			var span4_nodes = children(span4);
			t31 = claim_text(span4_nodes, "Hubungi Kami rudi@dibumi.com");
			span4_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			t32 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Dibumi.com";
			attr_dev(h1, "class", "title is-1 is-uppercase");
			add_location(h1, file, 9, 3, 254);
			attr_dev(h2, "class", "subtitle is-3");
			add_location(h2, file, 12, 3, 318);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 8, 2, 227);
			attr_dev(div1, "class", "hero-body has-text-centered");
			add_location(div1, file, 7, 1, 183);
			attr_dev(section0, "class", "hero is-medium is-fullwidth is-primary is-bold");
			add_location(section0, file, 6, 0, 117);
			attr_dev(h3, "class", "title");
			add_location(h3, file, 20, 2, 534);
			attr_dev(p0, "class", "subtitle");
			add_location(p0, file, 21, 2, 571);
			attr_dev(div2, "class", "container");
			add_location(div2, file, 19, 1, 508);
			add_location(br, file, 25, 1, 655);
			attr_dev(i0, "class", "fas fa-coins fa-4x");
			add_location(i0, file, 31, 7, 848);
			attr_dev(span0, "class", "has-text-primary");
			add_location(span0, file, 30, 5, 809);
			attr_dev(h40, "class", "title is-4");
			add_location(h40, file, 33, 5, 901);
			attr_dev(p1, "class", "subtitle");
			add_location(p1, file, 34, 5, 945);
			attr_dev(div3, "class", "box");
			add_location(div3, file, 29, 4, 786);
			attr_dev(a0, "class", "column is-4");
			attr_dev(a0, "href", "https://bayarcepat.com");
			attr_dev(a0, "target", "_blank");
			add_location(a0, file, 28, 3, 712);
			attr_dev(i1, "class", "fas fa-shopping-bag fa-4x");
			add_location(i1, file, 40, 7, 1190);
			attr_dev(span1, "class", "has-text-primary");
			add_location(span1, file, 39, 5, 1151);
			attr_dev(h41, "class", "title is-4");
			add_location(h41, file, 42, 5, 1250);
			attr_dev(p2, "class", "subtitle");
			add_location(p2, file, 43, 5, 1295);
			attr_dev(div4, "class", "box");
			add_location(div4, file, 38, 4, 1128);
			attr_dev(a1, "class", "column is-4");
			attr_dev(a1, "href", "https://toko.dibumi.com");
			attr_dev(a1, "target", "_blank");
			add_location(a1, file, 37, 3, 1053);
			attr_dev(i2, "class", "fas fa-piggy-bank fa-4x");
			add_location(i2, file, 49, 7, 1500);
			attr_dev(span2, "class", "has-text-primary");
			add_location(span2, file, 48, 5, 1461);
			attr_dev(h42, "class", "title is-4");
			add_location(h42, file, 51, 5, 1558);
			attr_dev(p3, "class", "subtitle");
			add_location(p3, file, 52, 5, 1605);
			attr_dev(div5, "class", "box");
			add_location(div5, file, 47, 4, 1438);
			attr_dev(a2, "class", "column is-4");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 46, 3, 1394);
			attr_dev(div6, "class", "columns");
			add_location(div6, file, 27, 2, 687);
			attr_dev(h43, "class", "title is-4");
			add_location(h43, file, 59, 5, 1827);
			attr_dev(p4, "class", "subtitle");
			add_location(p4, file, 60, 5, 1875);
			attr_dev(div7, "class", "box");
			add_location(div7, file, 58, 4, 1804);
			attr_dev(a3, "class", "column is-4 is-offset-4");
			attr_dev(a3, "href", "#");
			attr_dev(a3, "target", "_blank");
			add_location(a3, file, 57, 3, 1739);
			attr_dev(div8, "class", "columns");
			add_location(div8, file, 56, 2, 1714);
			attr_dev(div9, "class", "container");
			add_location(div9, file, 26, 1, 661);
			attr_dev(section1, "class", "section has-text-centered");
			add_location(section1, file, 18, 0, 463);
			attr_dev(span3, "class", "title");
			add_location(span3, file, 71, 7, 2131);
			add_location(p5, file, 71, 4, 2128);
			attr_dev(span4, "class", "subtitle");
			add_location(span4, file, 72, 4, 2183);
			attr_dev(div10, "class", "column");
			add_location(div10, file, 70, 3, 2103);
			attr_dev(div11, "class", "column");
			add_location(div11, file, 75, 3, 2256);
			attr_dev(div12, "class", "columns");
			add_location(div12, file, 69, 2, 2078);
			attr_dev(div13, "class", "container");
			add_location(div13, file, 68, 1, 2052);
			attr_dev(section2, "class", "section has-background-white");
			add_location(section2, file, 67, 0, 2004);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section0, anchor);
			append_dev(section0, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div0, t2);
			append_dev(div0, h2);
			append_dev(h2, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, section1, anchor);
			append_dev(section1, div2);
			append_dev(div2, h3);
			append_dev(h3, t5);
			append_dev(div2, t6);
			append_dev(div2, p0);
			append_dev(p0, t7);
			append_dev(section1, t8);
			append_dev(section1, br);
			append_dev(section1, t9);
			append_dev(section1, div9);
			append_dev(div9, div6);
			append_dev(div6, a0);
			append_dev(a0, div3);
			append_dev(div3, span0);
			append_dev(span0, i0);
			append_dev(div3, t10);
			append_dev(div3, h40);
			append_dev(h40, t11);
			append_dev(div3, t12);
			append_dev(div3, p1);
			append_dev(p1, t13);
			append_dev(div6, t14);
			append_dev(div6, a1);
			append_dev(a1, div4);
			append_dev(div4, span1);
			append_dev(span1, i1);
			append_dev(div4, t15);
			append_dev(div4, h41);
			append_dev(h41, t16);
			append_dev(div4, t17);
			append_dev(div4, p2);
			append_dev(p2, t18);
			append_dev(div6, t19);
			append_dev(div6, a2);
			append_dev(a2, div5);
			append_dev(div5, span2);
			append_dev(span2, i2);
			append_dev(div5, t20);
			append_dev(div5, h42);
			append_dev(h42, t21);
			append_dev(div5, t22);
			append_dev(div5, p3);
			append_dev(p3, t23);
			append_dev(div9, t24);
			append_dev(div9, div8);
			append_dev(div8, a3);
			append_dev(a3, div7);
			append_dev(div7, h43);
			append_dev(h43, t25);
			append_dev(div7, t26);
			append_dev(div7, p4);
			append_dev(p4, t27);
			insert_dev(target, t28, anchor);
			insert_dev(target, section2, anchor);
			append_dev(section2, div13);
			append_dev(div13, div12);
			append_dev(div12, div10);
			append_dev(div10, p5);
			append_dev(p5, span3);
			append_dev(span3, t29);
			append_dev(div10, t30);
			append_dev(div10, span4);
			append_dev(span4, t31);
			append_dev(div12, t32);
			append_dev(div12, div11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(section1);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(section2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjQwNGU1OTIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
