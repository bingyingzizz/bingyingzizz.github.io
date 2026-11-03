# T1 空间　`def.t1-space`　·　续页（第 3 页）
[在星图里打开](../#n=def.t1-space)　·　第 1 页 [nodes/def.t1-space.md](./def.t1-space.md)　·　上一页 [nodes/def.t1-space.2.md](./def.t1-space.2.md)

## 陈述（续）
- (1) $\iff$ (2)：**几乎免费，但要两次**。由 (1) 得 (2)：$\{y\}$ 闭 $\implies$ $X\setminus\{y\}$ 开且含 $x$ 不含 $y$，对 $x, y$ 交换再做一次即得另一半。反向：$X \setminus \{y\} = \bigcup\{\, U \ni x : x \ne y \,\}$ 是开集之并 $\implies$ $\{y\}$ 闭。**这一步只用开集公理（任意并）。**
- (1) $\iff$ (3)：**要用“有限并闭”**。单点闭 $\
implies$ 有限并闭（闭集对有限并封闭）；反过来取单点即为有限集。**注意这里必须有限**：可数并闭不成立（否则 $T_{1}$ 就成了 $T_{2}$，见下）。
- (1) $\iff$ (4)：**只做补集与并**。$x$ 的闭包 = 含 $x$ 的一切闭集之交 = 一切含 $x$ 的开集的补的交 = 补掉「一切含 $x$ 开集之并」；于是「闭包 $=\{x\}$」$\iff$「$\big
cup\{U \ni x\} = X \setminus \{x\}$ 开」$\iff$ $\{x\}$ 闭。

> 续见 [nodes/def.t1-space.4.md](./def.t1-space.4.md)
