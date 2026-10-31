# 紧 Haus 是自由的商　`prop.chaus-quotient-of-free`　·　说明
根 `../`

**证明（写成正式的）。** 记 $f : S^{\mathrm{disc}}\to S$ 为恒等映射，它连续（离散拓扑最细）。由 Stone–Čech 的**泛性质**，$f$ 唯一地延拓为 $\bar f : \beta S^{\mathrm{disc}} \to S$，使 $\bar f\circ\iota = f$（$\iota$ 是稠密嵌入）。
- 由泛性质，两个映射 $\beta S^{\mathrm{disc}} \rightrightarrows S$ 若在 $\iota(S^{\mathrm{disc}})$ 上相同则相等；
- 于是 $\bar f\bigl(\overline{\iota(S^{\mathrm{disc}})}\bigr) = \bar f(\beta S^{\mathrm{disc}})$（**连续性 + 稠密性**：像的闭包等于闭包在连续映射下的像）$= \overline{f(S^{\mathrm{disc}})} = \overline{S} = S$ ✓。
故 $\bar f$ 满。∎
⭐ 这条与「紧 Hausdorff 是 $\mathbf{Top}$ 的反射子范畴」是一回事，只是换了个说法：反射子范畴里每个对象都是自由对象的商，而自由对象就是 $\beta I$。
