# 紧阿贝尔群的两项消解　`prop.chaus-two-term-resolution`　·　说明
根 `../`

**证明（对偶过去再对偶回来）。** 记 $\widehat{M} = \operatorname{Hom}_{\mathrm{cts}}(M, T)$ 为 Pontryagin 对偶（$T = \mathbb{R}/\mathbb{Z}$），由 Pontryagin–van Kampen 对偶，$M$ 紧 $\iff$ $\widehat{M}$ **离散** ✓。
**① 对离散的一侧造一个满射。** 取 $\widehat{M}$ 的一组生成元 $(e_{i})_{i \in I}$，得满射
$$\mathbb{Z}^{(I)} \twoheadrightarrow \widehat{M} ✓$$
（自由离散群是离散群的投射覆盖。）
**② 对偶回来。** Pontryagin 对偶把满射换成**单态射**、把自由离散群 $\mathbb{Z}^{(I)}$ 换成 $T^{I}$ ✓，于是
$$M \hookrightarrow T^{I}, \qquad M_{0} := T^{I} \text{ 连通（}T\text{ 连通，连通空间的积连通）}\;\checkmark$$
**③ 商也是连通的。** 令 $M_{1} := M_{0}/M$。对偶这条短正合列
$$0 \to M \to M_{0} \to M_{1} \to 0 \quad\leadsto\quad 0 \to \widehat{M_{1}} \to \mathbb{Z}^{(I)} \to \widehat{M} \to 0,$$
其中 $\widehat{M_{1}}$ 是自由离散群 $\mathbb{Z}^{(I)}$ 的**子群**，因而本身也是**自由离散群** $\cong \mathbb{Z}^{(J)}$ ✓（PI

> 续见 notes/prop.chaus-two-term-resolution.2.md
