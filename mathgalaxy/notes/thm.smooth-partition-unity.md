# 光滑单位分解　`thm.smooth-partition-unity`　·　说明
根 `../`

**证明的两块砖**：① $\mathbb{R}^{n}$ 上有**鼓包函数** —— 在半径 $1$ 的球内恒为 $1$、半径 $2$ 的球外为 $0$ 的光滑函数，由 $x \mapsto e^{-1/(1-\lVert x\rVert^{2})}$ 平移伸缩拼出来；② 光滑流形是**仿紧**的（第二可数 + Hausdorff + 局部欧氏），于是开覆盖有局部有限加细，可以在每个成员上放一个鼓包再归一化。两块砖缺一不可。

**为什么必须「局部有限」**：没有它，$\sum\rho_{\alpha}$ 在某点附近可能有无穷多项非零，和既不一定收敛也不一定光滑。局部有限保证每点附近只有有限多项，于是和是有限和 —— 光滑性、可积性、线性都自动继承。

**它撑起哪些结论**：黎曼度量存在（`def.riemannian-metric`）、向量丛上纤维度量存在（`prop.bundle-metric`）、最高次形式可积分（`def.integral-form`）、可定向性能用处处非零的 $n$-形式刻画（`prop.volume-form-orientation`）。这些证明的骨架全部是「局部造 + 单位分解粘」，没有一次是凭空构造。

> 续见 notes/thm.smooth-partition-unity.2.md
