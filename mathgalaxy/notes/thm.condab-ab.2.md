# CondAb 满足 AB6 与 AB4*　`thm.condab-ab`　·　说明
根 `../`

**证明（逐条归约到 $\mathbf{Ab}$）。** 关键工具就是上一条：**每个 $\Gamma(F,-)$（$F$ 自由）都保所有极限与余极限**，所以任何「用有限极限 + 余极限写出来的性质」都可以逐项检验，而逐项之后就是 $\mathbf{Ab}$ 里的熟事实。
- **有余极限 / 有极限**：逐项取余极限得到的预层仍是层（上一条）$\implies$ 存在 ✓；
- **滤过余极限正合（AB5）**：逐项算，$\mathbf{Ab}$ 里滤过余极限正合 ✓；
- **有生成元**：$\mathrm{Cond}$ 由 $\{h_{F}\}$（$F$ 自由紧 Hausdorff）生成 $\implies$ $\mathrm{CondAb}$ 由 $\{\mathbb{Z}\cdot F\}$ 生成 ✓；
- **AB4\*（积正合）**：积逐项算，$\mathbf{Ab}$ 里积正合 ✓；
- **AB6（滤过余极限与积交换）**：逐项化归到 $\mathbf{Ab}$ 的 AB6 ✓；
- **阿贝尔**：核、余核逐项算都是 $\mathbf{Ab}$ 里的核余核，单满分解、$\operatorname{im}\cong\operatorname{coim}$ 都逐项成立 ✓。∎
