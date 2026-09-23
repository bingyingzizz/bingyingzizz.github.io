# 佐恩引理 $\implies$ 每个向量空间有基
`imp.zorn-to-basis` · 推出 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `thm.vsbasis` 每个向量空间有基

4. **$B$ 生成 $V$**：若存在 $v \in V$ 不在 $B$ 的张成空间 span(B) 中，则 $B \cup \{v\}$ 仍线性无关（否则 $v$ 可写成 $B$ 中有限多个向量的线性组合，与 $v \notin \operatorname{span}(B)$ 矛盾），且严格大于 $B$，与 $B$ 的极大性矛盾。故 $\operatorname{span}(B) = V$，即 $B$ 是 $V$ 的基。取 $S_{0} = \emptyset$ 得「$V$ 有基」。∎

> 同样的套路可以证明：每个环有极大理想、每个域上每个模有极大无关组、每个偏序集有极大反链。
