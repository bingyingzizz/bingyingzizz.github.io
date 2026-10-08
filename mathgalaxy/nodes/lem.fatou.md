# Fatou 引理　`lem.fatou`
Fatou 引理（Fatou's Lemma）
layer 18 · 引理 · 积分 · 分析学

设 $\{f_n\} \subseteq L^+$，则

$$\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- `thm.mct` 单调收敛定理：MCT $\implies$ Fatou 引理　proofs/imp.fatou.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.dct` 控制收敛定理
- ⇒ `cor.fatou` Fatou 的推论

refs: Folland, Real Analysis, Theorem 2.18

> 说明见 `notes/lem.fatou.md`
