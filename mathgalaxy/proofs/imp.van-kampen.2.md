# imp.van-kampen
`imp.van-kampen` · 推出 · strong 边 · 根 `../`

`def.fundamental-group` 基本群 + `def.lebesgue-number` 勒贝格数 + `def.path-homotopy` 道路同伦 + `def.normal-subgroup` 正规子群 → `thm.van-kampen` van Kampen 定理

**第一步（分解闭道路）**：设 $\alpha : I \to X$ 是 $x_{0}$ 处的闭道路。对开覆盖 $\{U, V\}$ 用 `def.lebesgue-number`：存在 $\delta > 0$，使 $\alpha$ 的每个直径 $< \delta$ 的子区间都落在 $U$ 或 $V$ 里。取分点 $0 = t_{0} < t_{1} < \cdots < t_{n} = 1$ 细分到 $t_{i} - t_{i-1} < \delta$，记 $\alpha_{i} = \alpha|_{[t_{i-1}, t_{i}]}$，每段落在 $U$ 或 $V$ 中。取连接道路 $\beta_{i}$ 时，先给每段 $\alpha_{i}$ 指定一个**包含它的**开集 $\lambda_{i} \in \{U, V\}$；对每个内分点 $t_{i}$（$0 < i < n$），只需在 $\lambda_{i} \cap \lambda_{i+1}$ 中取 $\beta_{i}$（从 $x_{0}$ 到 $\alpha(t_{i})$）：同标签时它就是 $U$ 或 $V$，异标签时它是 $U \cap V$（此时 $\alpha(t_{i})$ 同时属于 $U$ 与 $V$、也在 $\lambd

> 续见 proofs/imp.van-kampen.3.md
