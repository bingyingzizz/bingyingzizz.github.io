# 简单函数逼近　`thm.simple-approximation`
定理：可测函数都是简单函数列的极限
layer 8 · 定理 · 可测函数与收敛 · 分析学

**(a)** 若 $f : X \to [0, +\infty]$ 可测，则存在简单函数列 $\{\varphi_n\}$ 使

$$0 \le \varphi_1 \le \varphi_2 \le \cdots \le f, \quad  \varphi_n \to f\text{ 逐点}, $$

并且**在 $f$ 有界的集合上还是一致收敛**。

**(b)** 一般地（$f : X \to \mathbb{C}$ 可测），可取 $\{\varphi_n\}$ 简单使
> 陈述续见 `nodes/thm.simple-approximation.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.simple-function` 简单函数：用到了定义 简单函数　proofs/def-link.lplus-simple-approx.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.measurable-closure` 可测函数的封闭性

refs: Folland, Real Analysis, Theorem 2.10

> 说明见 `notes/thm.simple-approximation.md`
