# Stonean 上 Ext 的截面公式　`lem.ext-stonean-section`　·　说明
根 `../`

**证明。** $S$ Stonean $\implies$ $\mathbb{Z}[S]$ 是**投射**对象，于是 $\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}[S], -)$ **正合**。
对自然同构
$$\operatorname{Hom}_{\mathbb{Z}}(M \cdot S,\ N) \cong \operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}[S],\ \operatorname{Hom}_{\mathbb{Z}}(M, N)\bigr)$$
（这是 $M \cdot S = M \otimes_{\mathbb{Z}} \mathbb{Z}[S]$ 的伴随形式）两边取右导出：左端给出 $\operatorname{Ext}^{n}_{\mathbb{Z}}(M\cdot S, N)$；右端因为 $\operatorname{Hom}(\mathbb{Z}[S],-)$ 正合，可以直接穿过导出函子，得 $\operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}[S], \operatorname{Ext}^{n}_{\mathbb{Z}}(M,N)\bigr)$，而后者按定义就是 $\operatorname{Ext}^{n}_{\mathbb{Z}}(M,N)(S)$。两边一比即得。∎
