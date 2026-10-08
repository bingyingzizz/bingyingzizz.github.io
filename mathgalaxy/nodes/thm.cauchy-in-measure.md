# 依测度 Cauchy ⟹ 收敛　`thm.cauchy-in-measure`
定理：依测度 Cauchy 列必有依测度极限，且有一子列 a.e. 收敛
layer 16 · 定理 · 可测函数与收敛 · 分析学

若 $\{f_n\}$ 依测度 Cauchy，则存在可测函数 $f$ 使

$$f_n \to f\text{ 依测度}, $$

并且存在**子列** $\{f_{n_j}\}$ 使

$$f_{n_j} \to f\quad  \text{a.e.}$$

## 为什么成立（入边，证明在 proofs/）
- `def.cauchy-in-measure` 依测度 Cauchy：依测度 Cauchy $\implies$ 依测度收敛且有一子列 a.e. 收敛　proofs/imp.cauchy-in-measure.md
- `def.cauchy-in-measure` 依测度 Cauchy：用到了定义 依测度 Cauchy　proofs/def-link.cauchy-thm.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-cauchy-in-measure.md

refs: Folland, Real Analysis, Theorem 2.30

> 说明见 `notes/thm.cauchy-in-measure.md`
