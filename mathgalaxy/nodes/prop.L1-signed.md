# L¹(ν) 与全变差　`prop.L1-signed`
命题：符号测度的 $L^{1}(\nu) = L^{1}(|\nu|)$，以及几条基本不等式
layer 19 · 命题 · 微分定理 · 分析学

设 $\nu$ 是符号测度或复测度。

**(a)** $\nu \ll  |\nu|$，并且

$$| d\nu / d|\nu| | = 1\quad  |\nu|-\text{a.e.}$$

**(b)** 定义 $L^1(\nu) := L^1(|\nu|)$。若 $f \in L^1(\nu)$，则

$$| \int f d\nu | \le \int |f| d|\nu|$$

**(c)** $|\nu_1 + \nu_2| \le |\nu_1| + |\nu_2|$（即全变差满足三角不等式）。

## 为什么成立（入边，证明在 proofs/）
- `def.rn-derivative` RN 导数与 Lebesgue 分解：用到了定义 RN 导数与 Lebesgue 分解　proofs/def-link.totalvariation-l1.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-l1signed.md

refs: Folland, Real Analysis, §3.3

> 说明见 `notes/prop.L1-signed.md`
