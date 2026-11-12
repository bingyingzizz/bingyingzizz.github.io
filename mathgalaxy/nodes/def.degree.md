# 映射的度　`def.degree`
度：$S^{n-1} \to S^{n-1}$ 在 $H_{n-1} \cong \mathbb{Z}$ 上的倍数
layer 26 · 定义 · 同调群 · 拓扑学
[在星图里打开](../#n=def.degree)　·　[节点索引](../index.md)

设 $n \ge 1$，$f : S^{n-1} \to S^{n-1}$ 连续。取定约化同调 $\tilde{H}_{n-1}(S^{n-1}; \mathbb{Z}) \cong \mathbb{Z}$ 的一个生成元，记作 $[S^{n-1}]$（等价于给 $S^{n-1}$ 取一个**定向**；$n \ge 2$ 时它就是 $H_{n-1}$）。则存在**唯一**的整数 $d$ 使

$f_{*}[S^{n-1}] = d \cdot [S^{n-1}],$

称 $d$ 为 $f$ 的**度**，记 $\deg f$。

换成相反的生成元 $-[S^{n-1}]$ 时 $d$ 变号，所以**度依赖定向的选取**；$|\deg f|$ 与定向无关。

基本值：$\deg(\mathrm{id}) = 1$，常值映射的度为 $0$，且 $\deg(g \circ f) = \deg g \cdot \deg f$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.degree.2.md](./def.degree.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.degree.3.md](./def.degree.3.md)

refs: Hatcher, Algebraic Topology, §2.2

> 说明见 `notes/def.degree.md`

引用：`def.degree`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
