# 积分为零 ⟺ 几乎处处为零　`prop.integral-zero-iff`
命题：$\int f = 0 \iff f = 0 \text{a.e.}$
layer 20 · 命题 · 积分 · 实变函数+数学分析
[在星图里打开](../#n=prop.integral-zero-iff)　·　[节点索引](../index.md)

设 $f \in L^+$。则

$$\int f d\mu = 0 \iff f = 0 \mu-\text{a.e.}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.null-set`](../nodes/def.null-set.md) 零集与完备 + [`def.ae`](../nodes/def.ae.md) 几乎处处：imp.integral-zero-iff　[proofs/imp.integral-zero-iff.md](../proofs/imp.integral-zero-iff.md)

- …另有入边，续页见 [nodes/prop.integral-zero-iff.2.md](./prop.integral-zero-iff.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.termwise-L1`](../nodes/thm.termwise-L1.md) L¹ 的逐项积分

- …另有出边，续页见 [nodes/prop.integral-zero-iff.3.md](./prop.integral-zero-iff.3.md)

refs: Folland, Real Analysis, Prop. 2.16

> 说明见 `notes/prop.integral-zero-iff.md`

引用：`prop.integral-zero-iff`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
