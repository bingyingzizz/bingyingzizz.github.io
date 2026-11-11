# 对偶把「紧」换成「离散」造两项分解
`def-link.ttr-lc` · 推出 · strong 边 · 根 `../`

`thm.pontryagin-van-kampen` Pontryagin–van Kampen 对偶 → `prop.chaus-two-term-resolution` 紧阿贝尔群的两项消解

命题要在 $\mathbf{CHaus}$ 里为 $M$ 造出 $\mathbb{Z}^{(I)}\to M\to 0$ 型的两项表现。第一步用 `thm.pontryagin-van-kampen`：对偶 $M\mapsto\widehat{M}=\operatorname{Hom}_{\mathrm{cts}}(M,T)$ 给出 $M$ 紧 $\iff\widehat{M}$ 离散，并把满射换成单射、单射换成满射。于是取 $\widehat{M}$ 的生成元集 $(e_{i})_{i\in I}$ 得满射 $\mathbb{Z}^{(I)}\twoheadrightarrow\widehat{M}$，对偶回来得单射 $M\hookrightarrow T^{I}$，取商即得所需正合列。紧性、离散性与满/单的互换整条都建立在该定理上。∎

> 「紧 $\iff$ 对偶离散」用的是 Pontryagin–van Kampen 对偶。
