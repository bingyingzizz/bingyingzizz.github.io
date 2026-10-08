# 米田引理 $\implies$ 米田嵌入全忠实、保极限
`imp.yoneda-embedding` · 推出 · strong 边 · 根 `../`

`lem.yoneda` 米田引理 → `prop.yoneda-embedding` 米田嵌入

**全忠实。** 取预层的对偶形式（把 $\mathcal{C}$ 换成 $\mathcal{C}^{\mathrm{op}}$）：对 $T = h_{Y}$ 与 $X \in \mathcal{C}$ 有

$$\operatorname{Hom}_{\widehat{\mathcal{C}}}(h_{X}, h_{Y}) \cong h_{Y}(X) = \operatorname{Hom}_{\mathcal{C}}(X, Y)$$

这恰是 $\delta$ 在 Hom 集上诱导的映射，所以它逐对是双射，$\delta$ 全忠实。∎

**保持所有极限。** 设 $D : I \to \mathcal{C}$ 有极限。$\widehat{\mathcal{C}}$ 是函子范畴，其中的极限**逐点**计算，于是对每个 $Z \in \mathcal{C}$，

$$\Bigl(\varprojlim_{i} h_{D(i)}\Bigr)(Z) = \varprojlim_{i} \operatorname{Hom}_{\mathcal{C}}(Z, D(i)) \cong \operatorname{Hom}_{\mathcal{C}}\Bigl(Z, \varprojlim_{i} D(i)\Bigr) = h_{\lim D}(Z)$$

> 续见 proofs/imp.yoneda-embedding.2.md
