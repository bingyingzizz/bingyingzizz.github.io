# 拓扑可定向性　`def.topological-orientability`　·　说明
根 `../`

**一、保向是什么意思。** $\mathbb{R}^{n}$ 的标准定向由局部同调的标准生成元给出：对 $x\in\mathbb{R}^{n}$，$H_{n}(\mathbb{R}^{n},\mathbb{R}^{n}\setminus\{x\};\mathbb{Z})\cong\mathbb{Z}$，取定一个生成元作为「正定向」。设 $h:V\to W$ 是 $\mathbb{R}^{n}$ 两个开集之间的同胚，$x\in V$。$h$ 在 $x$ 处**保向**，指诱导同构 $H_{n}(V,V\setminus\{x\})\to H_{n}(W,W\setminus\{h(x)\})$ 把标准生成元送到标准生成元；否则称**反向**。若 $V$ 连通，则「在一点保向」蕴含「处处保向」（局部同调沿连通性连续变化，只能取两个值）。$n=1$ 时这就是通常的单调递增；$n=2$ 时就是通常的保向同胚。

> 续见 notes/def.topological-orientability.2.md
