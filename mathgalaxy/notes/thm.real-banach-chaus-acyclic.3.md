# 实 Banach 在紧 Hausdorff 上零调　`thm.real-banach-chaus-acyclic`　·　说明
根 `../`

**证明（把偏差用单位分解压掉）。** 由「紧 Hausdorff 上 Čech = 层上同调」、「Banach 在 Stone 上零调」与「$K$-有界零调 $\implies$ 零调」，只需证：对 Stone 空间的连续满射 $S_{0} \to S$，增广 Čech 复形 $\check{C}^{\bullet}\bigl((S_{0}\to S)^{+}, V\bigr)$ 是 **$1$-有界零调**的。
固定 $\varepsilon > 0$ 与 $f \in \check{C}^{n}$（即 $S_{n} \to V$ 连续，$S_{n}$ 是 $S_{0}$ 在 $S$ 上的 $(n{+}1)$ 重纤维积）。记 $\pi_{n} : S_{n} \to S$ 与 $f_{x} := f|_{\pi_{n}^{-1}(x)}$。
- 对每个 $x \in S$，对纤维上的满射 $\pi_{n}^{-1}(x) \to \{x\}$ 用「Stone 满射的 Čech 复形 $1$-有界零调」（逐纤维的版本），得 $g_{x} : \pi_{n+1}^{-1}(x) \to V$ 使
$$\|f_{x} - d g_{x}\| \le \|d f_{x}\| + \frac{\varepsilon}{2} \le \|df\| + \frac{\varepsilon}{2}.$$
- 由 **Tietze（Banach 值）**，$g_{x}$ 延拓成 $S_{n+1}$ 上的 $G_{x}$；由连续性，$x$ 有邻域 $V_{x}$ 使在 $\pi_{n+1}^{-1}(V_{x})$ 上 $\|f - dG_{x}\| < \|df\| + \varepsilon$。
- 取有限的 $V_{1}, \ld

> 续见 notes/thm.real-banach-chaus-acyclic.4.md
