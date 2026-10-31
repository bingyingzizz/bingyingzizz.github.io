# 映射同伦　`def.homotopy-maps`
同伦：映射之间的一整段连续形变
layer 6 · 定义 · 基本群 · 拓扑学
[在星图里打开](../#n=def.homotopy-maps)　·　[节点索引](../index.md)

设 $X, Y$ 是拓扑空间，$f, g : X \to Y$ 连续。称 $f$ **同伦于** $g$，如果存在连续映射

$$F : X \times [0, 1] \longrightarrow Y$$

使 $F(x, 0) = f(x)$ 且 $F(x, 1) = g(x)$ 对一切 $x \in X$ 成立。记 $f \simeq g$，
把 $F$ 叫一个**同伦**（也叫同伦映射）。
> 陈述续见 [nodes/def.homotopy-maps.2.md](./def.homotopy-maps.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.continuous-map`](../nodes/def.continuous-map.md) 连续映射：用到了定义 连续映射　[proofs/e51:definition.md](../proofs/e51:definition.md)

- …另有入边，续页见 [nodes/def.homotopy-maps.3.md](./def.homotopy-maps.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.homotopy-maps.4.md](./def.homotopy-maps.4.md)

refs: Munkres, Topology (2nd ed.), Ch. 9 · Homotopy of Paths；Hatcher, Algebraic Topology, Ch. 1 §1.1 · Homotopy and homotopy type

> 说明见 `notes/def.homotopy-maps.md`

引用：`def.homotopy-maps`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
