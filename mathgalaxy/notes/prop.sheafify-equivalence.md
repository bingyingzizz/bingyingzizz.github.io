# 层化与等价关系交换　`prop.sheafify-equivalence`　·　说明
根 `../`

**证明。** 记层化为 $(-)^{\sharp}$：它是到层范畴的反射，故左伴随。
- 左伴随保**余极限** ✓；它同时又**左正合**（保有限极限，因为拓扑斯都是左正合的）✓。
- **等价关系的条件都是有限极限条件**：$R \rightrightarrows T$ 是等价关系 $\iff$ 存在 $R \to T\times T$ 使其为单态射（自反、对称、传递三条用对角、交换与拉回表达）。层化保这些有限极限，故 $R^{\sharp} \rightrightarrows T^{\sharp}$ 仍是等价关系 ✓。
- **商是余等化子**：$T/R := \operatorname{coeq}(R \rightrightarrows T)$，是余极限，故 $(T/R)^{\sharp} \cong \operatorname{coeq}(R^{\sharp}\rightrightarrows T^{\sharp}) = T^{\sharp}/R^{\sharp}$ ✓。
两件事合起来就是「先商再层化 $=$ 先层化再商」✓。∎

「先取商再层化」与「先层化再取商」结果一样 —— 这类交换性是层化「保余极限」的具体面貌（商是余等化子，是余极限）。
