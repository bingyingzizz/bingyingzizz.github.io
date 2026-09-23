# 要么奇异、要么有下界　`lem.singular-or-lower-bound`
引理：两个有限测度，要么相互奇异，要么在某个正测度集上成比例
layer 16 · 引理 · 符号测度与分解 · 分析学

设 $\nu$、$\mu$ 都是**有限**测度。则二者必有一个成立：

- $\nu \perp  \mu$；或
- 存在 $\varepsilon > 0$ 与 $E \in \mathcal{M}$，$\mu(E) > 0$，使 $\nu \ge \varepsilon \mu$ 在 $E$ 上成立（即 $\nu(F) \ge \varepsilon \mu(F)$ 对一切可测 $F \subseteq E$）。

## 为什么成立（入边，证明在 proofs/）
- `def.absolute-continuity` 绝对连续：用到了定义 绝对连续　proofs/def-link.ac-lemma.md
- `def.mutually-singular` 相互奇异：用到了定义 相互奇异　proofs/def-link.singular-lemma.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

refs: Folland, Real Analysis, Lemma 3.8

> 说明见 `notes/lem.singular-or-lower-bound.md`
