# 非负函数的积分　`def.integral-nonneg`
非负可测函数的积分：从下面取上确界
layer 16 · 定义 · 积分 · 分析学

设 $f \in L^+$。定义

$$\int f d\mu := \sup \{ \int \varphi d\mu : 0 \le \varphi \le f, \varphi\text{ 是简单函数} \}$$

## 为什么成立（入边，证明在 proofs/）
- `def.integral-simple` 简单函数的积分：用到了定义 简单函数的积分　proofs/def-link.nonneg-simple.md
- `def.bound` 界与确界：用到了定义 界与确界　proofs/dep.sup-integral-nonneg.md
- `def.lplus` L⁺：用到了定义 L⁺　proofs/def-dep.lplus-integral-nonneg.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.mct` 单调收敛定理
- 被 `thm.mct` 单调收敛定理 用
- 被 `prop.monotone-integral-derivative` 递增函数的导数积分不等式 用
- 被 `def.integral-complex` 复函数的积分 用
- 被 `def.integrable` 可积 / L¹ 用
- 被 `def.lp-norm` L^p 范数 用

refs: Folland, Real Analysis, §2.2

> 说明见 `notes/def.integral-nonneg.md`
