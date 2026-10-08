# Fatou 的推论　`cor.fatou`
推论：$f_{n} \to f \text{a.e.} \implies \int f \le \lim \int f_{n}$
layer 19 · 推论 · 积分 · 分析学

设 $\{f_n\} \subseteq L^+$，$f \in L^+$，且 $f_n \to f$ a.e.。则

$$\int f \le \liminf_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- `lem.fatou` Fatou 引理：Fatou 引理 $\implies \text{a.e.}$ 版本的 Fatou　proofs/imp.fatou-corollary.md
- `def.lplus` L⁺：用到了定义 L⁺　proofs/def-link.lplus-fatou-cor.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-fatou.md

refs: Folland, Real Analysis, §2.2；Rudin, Real and Complex Analysis, Ch. 1

## 说明
a.e. 收敛时 $\liminf f_n = f$，直接套 Fatou 引理即可。
