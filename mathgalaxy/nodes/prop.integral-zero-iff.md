# 积分为零 ⟺ 几乎处处为零　`prop.integral-zero-iff`
命题：$\int f = 0 \iff f = 0 \text{a.e.}$
layer 16 · 命题 · 积分 · 分析学

设 $f \in L^+$。则

$$\int f d\mu = 0 \iff f = 0 \mu-\text{a.e.}$$

## 为什么成立（入边，证明在 proofs/）
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.nullset-zeromeasure.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-integral-zero.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.termwise-L1` L¹ 的逐项积分
- ⇒ `prop.integrals-equal-iff` 何时两个函数积分处处相同

refs: Folland, Real Analysis, Prop. 2.16

> 说明见 `notes/prop.integral-zero-iff.md`
