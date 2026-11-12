# Čech 复形　`def.cech-complex`　·　说明
根 `../`

**为什么是交错和**：$d^{2}=0$ 来自「相邻面抵消」——每个 $(n+2)$-单形被两种顺序打到同一个 $(n+1)$-单形，符号相反。这正是单纯复形边缘算子的公式。

**与 Čech 上同调的关系**：$\check{H}^{n}(X,M)$ 就是 $\check{C}^{\bullet}(\mathfrak{X},M)$ 取同调再沿覆盖取余极限（`def.cech-cohomology`、`prop.cech-as-colim`）；对层 $M$ 要先把 $M$ 看成预层 $H(M)$。

**出处与弱点**：Le Stum §7.3.3（PDF p.138）的 Proposition 7.3.4 只使用记号 $\check{C}^{\bullet}(X,M)$，全书**没有**给它编号 Definition；本条按标准写法补出定义，出处只到 §7.3.3 + Prop 7.3.4。这是少数「书只给记号、不给定义」的节点，读者应知道这一层。

**一般景的积**：定义要求 $\mathcal{C}$ 有纤维积，否则乘积项不存在；在 $\mathbf{Set}$ 或 $\mathbf{Top}$ 的景里就是通常的交叠 $X_{i_{0}}\cap\cdots\cap X_{i_{n}}$。
