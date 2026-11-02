# 正合列构成子范畴　`prop.exact-sequence-subcategory`　·　说明
根 `../`

**证明。**
**① 是（全）子范畴。** 正合性是列**本身**的性质，与比较映射无关，所以「对象是左正合列」在恒等与复合下当然封闭 —— 它其实是 $\mathcal{C}^{3}$ 的全子范畴 ✓。
**② 对有限双积封闭。** 阿贝尔范畴里核与像都与有限双积交换：
$$\ker(f_{1}\oplus f_{2}) = \ker f_{1}\oplus\ker f_{2}, \qquad \operatorname{im}(f_{1}\oplus f_{2}) = \operatorname{im}f_{1}\oplus\operatorname{im}f_{2} ✓$$
（两者分别是有限极限与有限余极限，逐分量计算即可。）于是两条左正合列的双积仍左正合：
$$\operatorname{im}(d^{n-1}_{1}\oplus d^{n-1}_{2}) = \operatorname{im}d^{n-1}_{1}\oplus\operatorname{im}d^{n-1}_{2} = \ker d^{n}_{1}\oplus\ker d^{n}_{2} = \ker(d^{n}_{1}\oplus d^{n}_{2}) ✓$$
右正合对偶。短正合列再补一句：$0 \to M' \to M \to M'' \to 0$ 正合 $\iff$ 左端映射单、右端映射满、且 $\operatorname{im} = \ker$ —— 这三条都被逐分量保持 ✓。零对象（三条零列）显然正合，充当双积的单位元 ✓。
于是这三

> 续见 notes/prop.exact-sequence-subcategory.2.md
