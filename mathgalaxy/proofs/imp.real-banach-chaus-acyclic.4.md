# imp.real-banach-chaus-acyclic
`imp.real-banach-chaus-acyclic` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.cech-complex` Čech 复形 + `def.cech-cohomology` Čech 上同调 + `def.banach-space` Banach 空间 → `thm.real-banach-chaus-acyclic` 实 Banach 在紧 Hausdorff 上零调

记 $\pi_{n} : S_{n} \to S$ 与 $f_{x} := f|_{\pi_{n}^{-1}(x)}$。
- 对每个 $x \in S$，对纤维上的满射 $\pi_{n}^{-1}(x) \to \{x\}$ 用「Stone 满射的 Čech 复形 $1$-有界零调」（逐纤维的版本），得 $g_{x} : \pi_{n+1}^{-1}(x) \to V$ 使
$$\|f_{x} - d g_{x}\| \le \|d f_{x}\| + \frac{\varepsilon}{2} \le \|df\| + \frac{\varepsilon}{2}.$$
- 由 **Tietze（Banach 值）**，$g_{x}$ 延拓成 $S_{n+1}$ 上的 $G_{x}$；由连续性，$x$ 有邻域 $V_{x}$ 使在 $\pi_{n+1}^{-1}(V_{x})$ 上 $\|f - dG_{x}\| < \|df\| + \varepsilon$。
- 取有限的 $V_{1}, \ldots, V_{r}$ 覆盖 $S$（**紧性**），配从属的单位分解 $\{\varph

> 续见 proofs/imp.real-banach-chaus-acyclic.5.md
