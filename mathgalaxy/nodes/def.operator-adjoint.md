# 伴随算子　`def.operator-adjoint`
伴随算子 $T^{\ast}$
layer 10 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.operator-adjoint)　·　[节点索引](../index.md)

设 $V, W$ 是有限维内积空间，$T : V \to W$ 线性。则存在**唯一**的线性映射 $T^{\ast} : W \to V$ 使

$$\langle T v, w \rangle_W = \langle v, T^{\ast} w \rangle_V \qquad (\forall v \in V, w \in W)$$

$T^{\ast}$ 叫 $T$ 的**伴随**。在标准正交基下，$[T^{\ast}] = [T]^{\dagger}$（共轭转置）。

性质：$(T + S)^{\ast} = T^{\ast} + S^{\ast}$、$(cT)^{\ast} = \bar{c}\,T^{\ast}$、$(TS)^{\ast} = S^{\ast}T^{\ast}$、$T^{\ast\ast} = T$。
> 陈述续见 [nodes/def.operator-adjoint.2.md](./def.operator-adjoint.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.operator-adjoint.3.md](./def.operator-adjoint.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.operator-adjoint.4.md](./def.operator-adjoint.4.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/def.operator-adjoint.md`

引用：`def.operator-adjoint`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
