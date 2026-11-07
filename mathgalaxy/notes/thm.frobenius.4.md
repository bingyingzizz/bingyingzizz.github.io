# Frobenius 定理　`thm.frobenius`　·　说明
根 `../`

$$\mathcal{D}=\operatorname{span}\{\partial_{1},\ldots,\partial_{k}\}.\qquad\blacksquare$$

**二、(2)$\implies$(3)：** 在平坦坐标里，$N=\{x^{k+1}=\cdots=x^{n}=0\}$ 的切空间恰由 $\partial_{1},\ldots,\partial_{k}$ 张成，故 $N$ 是 $k$ 维积分流形，过 $p$。$\square$

**三、(3)$\implies$(1)：** 若 $X,Y$ 在 $p$ 处与某积分流形 $N$ 相切，则 $[X,Y]_{p}$ 也与 $N$ 相切（括号的自然性：$[X,Y]$ 只依赖 $X,Y$ 的一阶信息，把 $X,Y$ 延拓成与 $N$ 相切的向量场后括号仍在 $TN$ 中，见 `def.lie-bracket`）。故 $\mathcal{D}$ 对合。$\square$

**四、(2)$\implies$(4)：** 每个点有坐标片 $N_{q}$；取所有连通积分流形的集合，按包含关系用 Zorn 引理取极大元（链的并仍是连通积分流形：局部上它就是坐标片的一部分，光滑性沿链保持）。极大元互不相交（否则两者的并仍是连通积分流形）且覆盖 $M$。需要 $M$ 第二可数，以保证叶的集合可数、构造良好；流形定义里已含这一条。完整四步见边 `imp.mf2-frobenius-integral`。$\square$

> 续见 notes/thm.frobenius.5.md
