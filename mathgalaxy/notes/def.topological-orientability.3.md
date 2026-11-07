# 拓扑可定向性　`def.topological-orientability`　·　说明
根 `../`

**三、同调刻画。** 设 $M$ 是闭连通 $n$-流形。对任意 $x$，$H_{n}(M,M\setminus\{x\};\mathbb{Z})\cong\mathbb{Z}$；自然映射 $H_{n}(M;\mathbb{Z})\to H_{n}(M,M\setminus\{x\};\mathbb{Z})$ 的像只能是 $0$ 或 $\mathbb{Z}$（Hatcher §3.3）。$M$ 可定向 $\iff$ 这个像是 $\mathbb{Z}$（等价地：存在**基本类** $[M]\in H_{n}(M;\mathbb{Z})$，它在每个 $x$ 处都给出局部定向）。不可定向时 $H_{n}(M;\mathbb{Z})=0$。证明思路：用定向双覆盖的转移函数粘一个「局部同调系数」的常层，可定向性正是这个局部系统平凡；基本类的存在性与截面的存在性对偶。

> 续见 notes/def.topological-orientability.4.md
