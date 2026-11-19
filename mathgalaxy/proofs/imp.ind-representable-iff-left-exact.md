# imp.ind-representable-iff-left-exact
`imp.ind-representable-iff-left-exact` · 推出 · strong 边 · 根 `../`

`def.ind-object` Ind-对象 + `def.exact-functor` 正合函子 + `lem.yoneda` 米田引理 → `prop.ind-representable-iff-left-exact` ind-可表示即左正合

**路线（骨架，未完成）。** 设 $\mathcal{C}$ 有有限余极限。
**(2) $\iff$ (1)**：$T=\varinjlim_{(X\to T)}h_{X}$ 是 Yoneda 稠密性（元素范畴的余极限给出 $T$）；指标范畴正是 $\mathcal{C}/T$。若 $\mathcal{C}/T$ 滤过，则该余极限是滤过余极限，$T$ 是 ind-可表示。反过来，滤过余极限中的有限数据可共同实现、共同相等，给 $\mathcal{C}/T$ 的滤过性；这一步的小性/宇宙约定本图未核，记为缺口。
**(1) $\implies$ (3)**：可表示预层保极限；集合中的滤过余极限与有限极限交换（`prop.filtered-finite-colimits`），故 $T$ 

> 续见 proofs/imp.ind-representable-iff-left-exact.2.md
