# 非负项级数 + 单调有界 $\implies$ 比较判别法
`imp.comparison-test` · 推出 · strong 边 · 根 `../`

`def.series` 级数收敛 + `thm.monotone-convergence` 单调有界定理 → `thm.comparison-test` 比较判别法

设 $0 \le a_n \le b_n$ 对 $n \ge N_0$ 成立。记 $A_N := \sum_{n \le N} a_n$、$B_N := \sum_{n \le N} b_n$，两者都（最终）单调递增。

1. 若 $\sum b_n$ 收敛，则 $\{B_N\}$ 有界；由 $A_N \le B_N + \text{const}$（前 $N_0$ 项之差），$\{A_N\}$ 也有界。
2. 单调有界 $\implies$ $\{A_N\}$ 收敛，即 $\sum a_n$ 收敛。
3. 第二条是第一条的逆否命题。

**极限形式**：设 $a_n / b_n \to L \in (0, +\infty)$，则存在 $N_0$ 使 $n \ge N_0$ 时 $\frac{L}{2} b_n \le a_n \le 2L\, b_n$ —— 两边比较即得同敛散性。$L = 0$ 时只有右半边不等式，故只单向成立。∎

> 比较判别法对「非负」的依赖是本质的：$b_n$ 收敛给出 $\{B_N\}$ 有界，而 $\{A_N\}$ 有界只有在它单调（即 $a_n \ge 0$）时才等价于收敛。
