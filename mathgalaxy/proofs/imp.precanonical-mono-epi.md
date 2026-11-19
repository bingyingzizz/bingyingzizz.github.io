# imp.precanonical-mono-epi
`imp.precanonical-mono-epi` · 推出 · strong 边 · 根 `../`

`def.precanonical-topology` 预标准拓扑 + `def.topos` 拓扑斯 + `def.sheaf` 层 + `lem.yoneda` 米田引理 → `prop.precanonical-mono-epi` 单满在层化后不变

**证明。** 记层化为 $(-)^{\sharp}$。
- **$(\implies)$**：层化是到层范畴的**左伴随**，故保余极限，特别保满态射；又是**左正合**的（保有限极限），故保单态射 ✓。
- **$(\Longleftarrow)$**：预标准拓扑是次标准的，所以 $h_{X}^{\sharp} \cong h_{X}$、$h_{Y}^{\sharp} \cong h_{Y}$，且 $f^{\sharp}$ 在 Yoneda 嵌入下的像就是 $h_{f}$。
- 对可表示预层：$h_{f}$ 单 $\iff$ $f$ 单（Yoneda 双射把 $h_{f}(Z)$ 的诱导映射写成「与 $f$ 复合」，单射性逐点验出）；$h_{f}$ 满 $\iff$ $f$ 满（$\mathbf{Set}$ 值预层范畴中的满态射逐点判定；

> 续见 proofs/imp.precanonical-mono-epi.2.md
