# 紧 Haus 是反射子范畴　`prop.chaus-reflective`　·　说明
根 `../`

构造：把 $X$ 送进 Tychonoff 方块



$$e_{X} : X \longrightarrow [0,1]^{C(X,[0,1])}, \qquad x \mapsto (f(x))_{f}$$



再取闭包 $\beta X := \overline{e_{X}(X)}$。方块紧 Hausdorff，闭子集因而也紧 Hausdorff。

⭐ **$e_{X}$ 是单射 $\iff$ $X$ 是 Tychonoff（$T_{3.5}$）空间** —— 即连续函数多到能分开不同的点。所以对于一般拓扑空间，$\beta X$ 是把「连续函数看得出的信息」全部收进来之后的紧化。

推论：**紧 Hausdorff 空间的任意极限自动是紧 Hausdorff 的**。这是反射子范畴对极限封闭的一般结论在这里的样子 —— 以后在 $\mathbf{CHaus}$ 里取极限，不必再回头验紧性与 Hausdorff 性。
