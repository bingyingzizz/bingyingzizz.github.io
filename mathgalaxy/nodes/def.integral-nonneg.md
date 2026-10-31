# 非负函数的积分　`def.integral-nonneg`
非负可测函数的积分：从下面取上确界
layer 17 · 定义 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=def.integral-nonneg)　·　[节点索引](../index.md)

设 $f \in L^+$。定义

$$\int f d\mu := \sup \{ \int \varphi d\mu : 0 \le \varphi \le f, \varphi\text{ 是简单函数} \}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.integral-simple`](../nodes/def.integral-simple.md) 简单函数的积分：用到了定义 简单函数的积分　[proofs/def-link.nonneg-simple.md](../proofs/def-link.nonneg-simple.md)
- [`def.bound`](../nodes/def.bound.md) 界与确界：用到了定义 界与确界　[proofs/dep.sup-integral-nonneg.md](../proofs/dep.sup-integral-nonneg.md)

- …另有入边，续页见 [nodes/def.integral-nonneg.2.md](./def.integral-nonneg.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.integral-nonneg.3.md](./def.integral-nonneg.3.md)

refs: Folland, Real Analysis, §2.2

> 说明见 `notes/def.integral-nonneg.md`

引用：`def.integral-nonneg`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
