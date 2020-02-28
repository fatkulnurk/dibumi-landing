import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.6ac13c7d.js';

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
	let div8;
	let h3;
	let t5;
	let t6;
	let p0;
	let t7;
	let t8;
	let div5;
	let div2;
	let a0;
	let span0;
	let i0;
	let t9;
	let h40;
	let t10;
	let t11;
	let p1;
	let t12;
	let t13;
	let div3;
	let a1;
	let span1;
	let i1;
	let t14;
	let h41;
	let t15;
	let t16;
	let p2;
	let t17;
	let t18;
	let div4;
	let a2;
	let span2;
	let i2;
	let t19;
	let h42;
	let t20;
	let t21;
	let p3;
	let t22;
	let t23;
	let div7;
	let a3;
	let div6;
	let h43;
	let t24;
	let t25;
	let p4;
	let t26;
	let t27;
	let section2;
	let div11;
	let div10;
	let div9;
	let p5;
	let span3;
	let t28;
	let t29;
	let p6;
	let t30;

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
			t3 = text("Menyelesaikan Masalah Dengan Teknologi");
			t4 = space();
			section1 = element("section");
			div8 = element("div");
			h3 = element("h3");
			t5 = text("Produk Kami");
			t6 = space();
			p0 = element("p");
			t7 = text("Beragam produk dan layanan dibuat oleh kami");
			t8 = space();
			div5 = element("div");
			div2 = element("div");
			a0 = element("a");
			span0 = element("span");
			i0 = element("i");
			t9 = space();
			h40 = element("h4");
			t10 = text("BayarCepat");
			t11 = space();
			p1 = element("p");
			t12 = text("Layanan keuangan yang membantu konter jadi lebih banyak untung.");
			t13 = space();
			div3 = element("div");
			a1 = element("a");
			span1 = element("span");
			i1 = element("i");
			t14 = space();
			h41 = element("h4");
			t15 = text("BeautyWeekday");
			t16 = space();
			p2 = element("p");
			t17 = text("Tempat beli masker Original dari korea, 100% dijamin asli.");
			t18 = space();
			div4 = element("div");
			a2 = element("a");
			span2 = element("span");
			i2 = element("i");
			t19 = space();
			h42 = element("h4");
			t20 = text("Uranus Equity");
			t21 = space();
			p3 = element("p");
			t22 = text("Layanan Urun Dana yang fokus untuk ekspansi bisnis UKM");
			t23 = space();
			div7 = element("div");
			a3 = element("a");
			div6 = element("div");
			h43 = element("h4");
			t24 = text("Masih Berjuang");
			t25 = space();
			p4 = element("p");
			t26 = text("Perjuangan Kami belum selesai, tunggu produk selanjutnya");
			t27 = space();
			section2 = element("section");
			div11 = element("div");
			div10 = element("div");
			div9 = element("div");
			p5 = element("p");
			span3 = element("span");
			t28 = text("Menjadi Partner?");
			t29 = space();
			p6 = element("p");
			t30 = text("Hubungi Kami di email rudi@dibumi.com");
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
			t3 = claim_text(h2_nodes, "Menyelesaikan Masalah Dengan Teknologi");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div8 = claim_element(section1_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			h3 = claim_element(div8_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t5 = claim_text(h3_nodes, "Produk Kami");
			h3_nodes.forEach(detach_dev);
			t6 = claim_space(div8_nodes);
			p0 = claim_element(div8_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t7 = claim_text(p0_nodes, "Beragam produk dan layanan dibuat oleh kami");
			p0_nodes.forEach(detach_dev);
			t8 = claim_space(div8_nodes);
			div5 = claim_element(div8_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a0 = claim_element(div2_nodes, "A", { href: true, target: true, class: true });
			var a0_nodes = children(a0);
			span0 = claim_element(a0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			i0 = claim_element(span0_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			span0_nodes.forEach(detach_dev);
			t9 = claim_space(a0_nodes);
			h40 = claim_element(a0_nodes, "H4", { class: true });
			var h40_nodes = children(h40);
			t10 = claim_text(h40_nodes, "BayarCepat");
			h40_nodes.forEach(detach_dev);
			t11 = claim_space(a0_nodes);
			p1 = claim_element(a0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t12 = claim_text(p1_nodes, "Layanan keuangan yang membantu konter jadi lebih banyak untung.");
			p1_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t13 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a1 = claim_element(div3_nodes, "A", { href: true, target: true, class: true });
			var a1_nodes = children(a1);
			span1 = claim_element(a1_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			i1 = claim_element(span1_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			span1_nodes.forEach(detach_dev);
			t14 = claim_space(a1_nodes);
			h41 = claim_element(a1_nodes, "H4", { class: true });
			var h41_nodes = children(h41);
			t15 = claim_text(h41_nodes, "BeautyWeekday");
			h41_nodes.forEach(detach_dev);
			t16 = claim_space(a1_nodes);
			p2 = claim_element(a1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t17 = claim_text(p2_nodes, "Tempat beli masker Original dari korea, 100% dijamin asli.");
			p2_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t18 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			a2 = claim_element(div4_nodes, "A", { class: true });
			var a2_nodes = children(a2);
			span2 = claim_element(a2_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			i2 = claim_element(span2_nodes, "I", { class: true });
			children(i2).forEach(detach_dev);
			span2_nodes.forEach(detach_dev);
			t19 = claim_space(a2_nodes);
			h42 = claim_element(a2_nodes, "H4", { class: true });
			var h42_nodes = children(h42);
			t20 = claim_text(h42_nodes, "Uranus Equity");
			h42_nodes.forEach(detach_dev);
			t21 = claim_space(a2_nodes);
			p3 = claim_element(a2_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t22 = claim_text(p3_nodes, "Layanan Urun Dana yang fokus untuk ekspansi bisnis UKM");
			p3_nodes.forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t23 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			a3 = claim_element(div7_nodes, "A", { class: true, target: true });
			var a3_nodes = children(a3);
			div6 = claim_element(a3_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h43 = claim_element(div6_nodes, "H4", { class: true });
			var h43_nodes = children(h43);
			t24 = claim_text(h43_nodes, "Masih Berjuang");
			h43_nodes.forEach(detach_dev);
			t25 = claim_space(div6_nodes);
			p4 = claim_element(div6_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t26 = claim_text(p4_nodes, "Perjuangan Kami belum selesai, tunggu produk selanjutnya");
			p4_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t27 = claim_space(nodes);
			section2 = claim_element(nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			div11 = claim_element(section2_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p5 = claim_element(div9_nodes, "P", {});
			var p5_nodes = children(p5);
			span3 = claim_element(p5_nodes, "SPAN", { class: true });
			var span3_nodes = children(span3);
			t28 = claim_text(span3_nodes, "Menjadi Partner?");
			span3_nodes.forEach(detach_dev);
			p5_nodes.forEach(detach_dev);
			t29 = claim_space(div9_nodes);
			p6 = claim_element(div9_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t30 = claim_text(p6_nodes, "Hubungi Kami di email rudi@dibumi.com");
			p6_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			section2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Dibumi.com";
			attr_dev(h1, "class", "title is-1 is-uppercase");
			add_location(h1, file, 9, 3, 268);
			attr_dev(h2, "class", "subtitle is-3");
			add_location(h2, file, 12, 3, 332);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 8, 2, 241);
			attr_dev(div1, "class", "hero-body has-text-centered");
			add_location(div1, file, 7, 1, 197);
			attr_dev(section0, "class", "hero is-medium is-fullwidth is-fullheight is-primary is-bold");
			add_location(section0, file, 6, 0, 117);
			attr_dev(h3, "class", "title");
			add_location(h3, file, 20, 2, 510);
			attr_dev(p0, "class", "subtitle");
			add_location(p0, file, 21, 2, 547);
			attr_dev(i0, "class", "fas fa-coins fa-4x");
			add_location(i0, file, 28, 7, 785);
			attr_dev(span0, "class", "has-text-primary");
			add_location(span0, file, 27, 5, 746);
			attr_dev(h40, "class", "title is-4");
			add_location(h40, file, 30, 5, 838);
			attr_dev(p1, "class", "subtitle");
			add_location(p1, file, 31, 5, 882);
			attr_dev(a0, "href", "https://bayarcepat.com");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "class", "box");
			add_location(a0, file, 26, 4, 679);
			attr_dev(div2, "class", "column is-4");
			add_location(div2, file, 25, 3, 649);
			attr_dev(i1, "class", "fas fa-shopping-bag fa-4x");
			add_location(i1, file, 37, 7, 1138);
			attr_dev(span1, "class", "has-text-primary");
			add_location(span1, file, 36, 5, 1099);
			attr_dev(h41, "class", "title is-4");
			add_location(h41, file, 39, 5, 1198);
			attr_dev(p2, "class", "subtitle");
			add_location(p2, file, 40, 5, 1245);
			attr_dev(a1, "href", "https://beautyweekday.dibumi.com");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "class", "box");
			add_location(a1, file, 35, 4, 1022);
			attr_dev(div3, "class", "column is-4");
			add_location(div3, file, 34, 3, 992);
			attr_dev(i2, "class", "fas fa-piggy-bank fa-4x");
			add_location(i2, file, 46, 7, 1440);
			attr_dev(span2, "class", "has-text-primary");
			add_location(span2, file, 45, 5, 1401);
			attr_dev(h42, "class", "title is-4");
			add_location(h42, file, 48, 5, 1498);
			attr_dev(p3, "class", "subtitle");
			add_location(p3, file, 49, 5, 1545);
			attr_dev(a2, "class", "box");
			add_location(a2, file, 44, 4, 1380);
			attr_dev(div4, "class", "column is-4");
			add_location(div4, file, 43, 3, 1350);
			attr_dev(div5, "class", "columns");
			add_location(div5, file, 24, 2, 624);
			attr_dev(h43, "class", "title is-4");
			add_location(h43, file, 56, 5, 1758);
			attr_dev(p4, "class", "subtitle");
			add_location(p4, file, 57, 5, 1806);
			attr_dev(div6, "class", "box");
			add_location(div6, file, 55, 4, 1735);
			attr_dev(a3, "class", "column is-4 is-offset-4");
			attr_dev(a3, "target", "_blank");
			add_location(a3, file, 54, 3, 1679);
			attr_dev(div7, "class", "columns");
			add_location(div7, file, 53, 2, 1654);
			attr_dev(div8, "class", "container");
			add_location(div8, file, 19, 1, 484);
			attr_dev(section1, "class", "section has-text-centered");
			add_location(section1, file, 18, 0, 439);
			attr_dev(span3, "class", "title");
			add_location(span3, file, 68, 7, 2080);
			add_location(p5, file, 68, 4, 2077);
			attr_dev(p6, "class", "subtitle");
			add_location(p6, file, 69, 4, 2132);
			attr_dev(div9, "class", "column");
			add_location(div9, file, 67, 3, 2052);
			attr_dev(div10, "class", "columns");
			add_location(div10, file, 66, 2, 2027);
			attr_dev(div11, "class", "container");
			add_location(div11, file, 65, 1, 2001);
			attr_dev(section2, "class", "section has-background-white has-text-centered");
			add_location(section2, file, 64, 0, 1935);
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
			append_dev(section1, div8);
			append_dev(div8, h3);
			append_dev(h3, t5);
			append_dev(div8, t6);
			append_dev(div8, p0);
			append_dev(p0, t7);
			append_dev(div8, t8);
			append_dev(div8, div5);
			append_dev(div5, div2);
			append_dev(div2, a0);
			append_dev(a0, span0);
			append_dev(span0, i0);
			append_dev(a0, t9);
			append_dev(a0, h40);
			append_dev(h40, t10);
			append_dev(a0, t11);
			append_dev(a0, p1);
			append_dev(p1, t12);
			append_dev(div5, t13);
			append_dev(div5, div3);
			append_dev(div3, a1);
			append_dev(a1, span1);
			append_dev(span1, i1);
			append_dev(a1, t14);
			append_dev(a1, h41);
			append_dev(h41, t15);
			append_dev(a1, t16);
			append_dev(a1, p2);
			append_dev(p2, t17);
			append_dev(div5, t18);
			append_dev(div5, div4);
			append_dev(div4, a2);
			append_dev(a2, span2);
			append_dev(span2, i2);
			append_dev(a2, t19);
			append_dev(a2, h42);
			append_dev(h42, t20);
			append_dev(a2, t21);
			append_dev(a2, p3);
			append_dev(p3, t22);
			append_dev(div8, t23);
			append_dev(div8, div7);
			append_dev(div7, a3);
			append_dev(a3, div6);
			append_dev(div6, h43);
			append_dev(h43, t24);
			append_dev(div6, t25);
			append_dev(div6, p4);
			append_dev(p4, t26);
			insert_dev(target, t27, anchor);
			insert_dev(target, section2, anchor);
			append_dev(section2, div11);
			append_dev(div11, div10);
			append_dev(div10, div9);
			append_dev(div9, p5);
			append_dev(p5, span3);
			append_dev(span3, t28);
			append_dev(div9, t29);
			append_dev(div9, p6);
			append_dev(p6, t30);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(section1);
			if (detaching) detach_dev(t27);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzVmZmQ4ZmQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
