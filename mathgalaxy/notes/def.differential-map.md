# 切映射　`def.differential-map`　·　说明
根 `../`

**良定义就是链式法则**：换一张卡 $\varphi$ 换成 $\theta$，两条过 $p$ 的曲线若在 $\varphi$ 卡里速度相同，则在 $\theta$ 卡里也相同（都等于同一个 Jacobi 矩阵乘同一个向量）。类不变，所以 $\mathrm{d}F_{p}$ 有定义 —— 但**存在性**完全靠转移映射光滑，这一点是本节点与前两个节点的接头处。

**导子视角更省事**：$\mathrm{d}F_{p}(v)$ 作为导子就是 $\bigl(\mathrm{d}F_{p}(v)\bigr)(f) = v(f \circ F)$ —— 一个复合，不用提曲线。两条路线给出同一个线性映射。

**为什么它不叫「导数」**：$\mathbb{R}^{n}$ 里 $\mathrm{d}F_{p}$ 是一个矩阵，能与差商直接联系；流形上没有减法，$\mathrm{d}F_{p}$ 只是**切空间之间**的线性映射。它是一阶信息，换坐标时两侧各乘一个 Jacobi 矩阵（一正一反），所以「$\mathrm{d}F$ 是张量」对，但「$\partial_{i}F$ 是张量」不对。

> 续见 notes/def.differential-map.2.md
