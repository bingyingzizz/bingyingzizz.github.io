# $\mathbb{Q}/\mathbb{Z}$ 内射 + 一个伴随 $\implies$ 足够多内射
`imp.enough-injectives` · 推出 · strong 边 · 根 `../`

`thm.pid-injective-divisible` 内射等价于可除 + `thm.baer-criterion` 内射的理想判据 → `thm.mod-enough-injectives` 足够多内射对象

**（三）$\operatorname{Hom}_{\mathbb{Z}}(R, E)$ 内射。** 它等于遗忘函子 $U$ 的右伴随作用在内射对象上：
$$\operatorname{Hom}_{R}\bigl(N, \operatorname{Hom}_{\mathbb{Z}}(R, E)\bigr) \;\cong\; \operatorname{Hom}_{\mathbb{Z}}(UN,\ E).$$
一般事实：伴随 $F \dashv G$ 中若 $F$ 正合，则 $G$ 把内射对象送到内射对象（把 $\operatorname{Hom}(-, GI)$ 换成 $\operatorname{Hom}(F -, I)$ 即知）；$U$ 显然正合 ✓。

于是每个模都嵌进内射模，递归造出内射消解 ✓。∎

> 三步各用一件现成工具：$\mathbb{Q}/\mathbb{Z}$ 内射（来自主理想整环那一条）、余生成元性质、遗忘–余自由伴随。比 Grothendieck 范畴的超限迭代短得多，代价是只对模范畴有效。
