# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**③ 无环消解算导出函子。** 由 ① ②，$\check{\mathcal{C}}^{\bullet}$ 是一个由 $\Gamma$-无环层组成的消解；由 Leray 零调性（零调消解算右导出函子），

$$H^{n}(X, \mathcal{M}) = H^{n}\bigl(\Gamma(X, \check{\mathcal{C}}^{\bullet})\bigr) = \check{H}^{n}(\mathfrak{U}, \mathcal{M}) .$$

再沿覆盖取余极限（Čech 上同调按定义就是沿覆盖的滤过余极限）得到一般结论。∎

⭐ **与「紧 Hausdorff」那条的关系**：紧 Hausdorff 必仿紧，所以这一条把 `prop.chaus-cech-eq-h` 覆盖在内；但两条的**证明**完全不同 —— 紧性用的路子是「有限覆盖在滤过系统里共尾 + 有限直积可由可表对象控制」，仿紧性用的是「局部有限 + 单位分解给出的软性」。同一个结论，两套互不依赖的机制。

> 续见 notes/thm.paracompact-cech-equals-sheaf.3.md
