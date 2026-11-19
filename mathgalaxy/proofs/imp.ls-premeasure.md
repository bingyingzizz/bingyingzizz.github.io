# imp.ls-premeasure
`imp.ls-premeasure` · 推出 · strong 边 · 根 `../`

`def.premeasure` 预测度 + `def.fundamental-class` 基本类 → `prop.ls-premeasure` F 给出的预测度

**证明。** 记 $\mathfrak{A}$ 为有限不交并 $\bigsqcup_{j=1}^{n}(a_{j}, b_{j}]$ 全体，$\mu_{0}\bigl(\bigsqcup_{j}(a_{j},b_{j}]\bigr) := \sum_{j}\bigl(F(b_{j})-F(a_{j})\bigr)$。
- **良定义**：半开区间的不交并分解，本质上就是把端点排成一串 $a_{1} < b_{1} \le a_{2} < \cdots$；把两种分解细化到公共细分，用 $F$ 的值在端点上的 telescoping 求和即可看出 $\mu_{0}$ 与分解无关 ✓；空并给 $\mu_{0}(\emptyset) = 0$ ✓。
- **有限可加**：把两个不交并拼起来直接相加 ✓。
- **可数可加（右连续在这里上场）**：设 $(a, b] = \bigsqcup_{j \ge 1}(a_{j}, b_{j}]$。
  **$\ge$**：对每个 $n$ 有 $(a,b] \supseteq \bigsqcup_{j \le n}(a_{j},b_{j}]$，由递增性 $F(b)-F(a) \ge \sum_{j \le n}\bigl(F(b_{j})-F(a_{j})\bigr)$，令 $n \to \infty$ ✓；
  **$\le$**：给 $\vareps

> 续见 proofs/imp.ls-premeasure.2.md
