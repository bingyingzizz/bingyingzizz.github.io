# 分式演算下的局部化　`prop.calculus-of-fractions`　·　说明
根 `../`

**证明（Gabriel–Zisman 的构造，逐条用掉三个条件）。** 设 $W$ 容许右分式演算。
- **分式与等价**：一个分式是  $X \xleftarrow{\ w\ } X' \xrightarrow{\ f\ } Y$（$w \in W$）；两个分式等价，如果存在 $X''\xrightarrow{v}X'$、$X''\xrightarrow{v'}X'$ 使 $w v = w' v'$（$\in W$）且 $f v = f' v'$ ✓。
- **等价关系**：自反、对称显然；传递性用 **Ore 条件 2** 把两次比较拉到同一个 $X''$ 上，再用 **消去条件 3** 处理剩下的差异 ✓。
- **复合**：两个分式的复合要「通分」——把 $f_{1}$ 与 $w_{2}$ 按 **条件 2** 摆成一个方块，得到一个公共的 $Z$，于是复合仍是单分式；换代表元不改变复合类（同样靠 2、3）✓。
- **范畴**：恒等取 $1_{X}$（$X \xleftarrow{1}X\xrightarrow{1}X$，条件 1 给出 $1 \in W$）；结合律由构造直接验（三条条件保证「通分」的结果与顺序无关）✓。
- **泛性质**：记得到的范畴为 $\operatorname{Frac}_{W}(\mathcal{C})$，函子 $\mathcal{C}\to\operatorname{Frac}_{W}(\mathcal{C}

> 续见 notes/prop.calculus-of-fractions.2.md
