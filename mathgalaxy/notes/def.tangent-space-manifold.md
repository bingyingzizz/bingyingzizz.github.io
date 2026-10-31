# 切空间　`def.tangent-space-manifold`　·　说明
根 `../`

**为什么不能用差商**：$\mathbb{R}^{n}$ 里切向量是 $(\gamma(t)-\gamma(0))/t$ 的极限，需要减法；流形上没有减法，能用的只有「坐标 + 链式法则」，所以定义必须写成「在某张卡里速度相同」这种**变换相容**的样子。

**两种定义为什么等价**：曲线类给出方向导数（Leibniz 律由乘积求导得到）；反过来，给一个导子 $D$，把它作用在展开式上、用 Leibniz 律杀掉二次以上的项，就得到 $D = \sum_{i}D(x^{i})\,\partial_{i}(p)$ —— 正好是某条曲线的方向导数。

**坐标变换**：$\partial/\partial x^{i} = \sum_{j}\frac{\partial y^{j}}{\partial x^{i}}\,\partial/\partial y^{j}$，系数是 Jacobi 矩阵。所以切向量**反变**（跟着坐标反向走），而 $\mathrm{d}f$ 这类余切向量**协变**。

⚠️ **记号陷阱**：$\partial_{i}(p)$ 是**向量**，$\mathrm{d}x^{i}(p)$ 是它的对偶**余向量**（$\mathrm{d}x^{i}(\partial_{j}) = \delta^{i}_{\ j}$）。曲面上这两样就是切平面的基与对偶余标架（`def.moving-frame`）。

> 续见 notes/def.tangent-space-manifold.2.md
