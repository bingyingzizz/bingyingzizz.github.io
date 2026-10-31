# 左不变向量场　`prop.left-invariant-fields`　·　续页（第 2 页）
[在星图里打开](../#n=prop.left-invariant-fields)　·　第 1 页 [nodes/prop.left-invariant-fields.md](./prop.left-invariant-fields.md)

## 陈述（续）
每个切向量长成一个整体向量场，而这些向量场恰好构成一个 Lie 代数
。
设 $G$ 是 Lie 群，$\mathfrak{g} := T_{e}G$（$e
$ 是单位元）。向量场 $X \in \mathfrak{X}(G)$ 叫**
左不变**，如果对一切 $g, h \in G$ 有
$$X_{gh} = \mathrm{d}(L_{g})_{h}\bigl(
X_{h}\bigr).$$
则：
1. **赋值给出同构**：$X \mapsto X_{e}$ 是「左不变
向量场的空间」到 $\mathfrak{g}$ 的线性同构（逆是 $v \maps
to \bigl(g \mapsto \mathrm{d}(L_{g})_{
e}(v)\bigr)$），于是这个空间是 $\dim G$ 维的；
2. *
*对 Lie 括号封闭**：$X, Y$ 左不变，则 $[X,Y]$ 也左不
变；
3. **于是 $\mathfrak{g}$ 带 Lie 代数结构**
：定义 $[v,w] := [\tilde v,\tilde w]_{e
}$（$\tilde v$ 是 $v$ 对应的左不变向量场），则 $(\mathf
rak{g},[\cdot,\cdot])$ 是 Lie 代数（`def.l

> 续见 [nodes/prop.left-invariant-fields.3.md](./prop.left-invariant-fields.3.md)
