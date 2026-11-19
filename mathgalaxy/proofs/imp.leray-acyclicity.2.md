# imp.leray-acyclicity
`imp.leray-acyclicity` · 推出 · strong 边 · 根 `../`

`def.f-acyclic` F-零调对象 + `def.right-derived-functor` 右导出函子 + `thm.five-lemma` 五引理 → `prop.leray-acyclicity` Leray 零调性

[1]. \end{array}$$
- 第三列左右相等，因为 $K^{0}$ 零调：$RFK^{0} = FK^{0}$；
- 第一列由归纳假设（$K'^{\bullet}$ 更短，且每一项仍零调）是同构；
- 于是由三角的四条「五引理」（两端是同构则中间也是），中间那列也是同构，即 $RFK^{\bullet} = FK^{\bullet}$。
**无界情形**：把 $K^{\bullet}$ 按 $K''^{\bullet} := (K^{0} \to \cdots \to K^{n+1})$ 截出有界尾段，对 $0 \to K'^{\bullet} \to K^{\bullet} \to K''^{\bullet} \to 0$ 取两条长正合列逐项比较（$\varinjlim$ 让 $n \to \infty$），即得上一条。

> 续见 proofs/imp.leray-acyclicity.3.md
