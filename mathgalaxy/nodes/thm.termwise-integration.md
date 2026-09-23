# 逐项积分　`thm.termwise-integration`
定理：非负函数级数可以逐项积分
layer 18 · 定理 · 积分 · 分析学

设 $\{f_n\} \subseteq L^+$，则
> 陈述续见 `nodes/thm.termwise-integration.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.mct` 单调收敛定理：MCT $\implies$ 逐项积分　proofs/imp.termwise.md
- `def.measure` 测度：用到了定义 测度　proofs/def-link.premeasure-termwise.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.termwise-L1` L¹ 的逐项积分

refs: Folland, Real Analysis, Theorem 2.15

## 说明
（现在 $f_n \ge 0$，所以两边都可能是 $\infty$；结论等价于：不可能出现「逐项积分发散而整体积分有限」的怪事。）

用法上这就是**无条件地交换 $\int$ 和 $\sum$**，不需要控制函数 —— 代价是要求非负。有正有负时必须换 DCT。
