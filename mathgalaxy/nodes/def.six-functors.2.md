# 6-函子形式　`def.six-functors`　·　续页（第 2 页）
[在星图里打开](../#n=def.six-functors)　·　第 1 页 [nodes/def.six-functors.md](./def.six-functors.md)

## 陈述（续）
- 每个概形 $X$ 给一个闭对称幺半三角范畴 $D(X)$（张量积 $- \otimes_X -$ 有右伴随 $\operatorname{Hom}_X$）；
- 每个映射 $f : X \to Y$ 给**拉回** $f^* : D(Y) \to D(X)$，它有右伴随 $f_*$（推前）；
- 每个（满足适当条件的）映射 $f : X \to Y$ 给**紧支撑推前** $f_! : D(X) \to D(Y)$（只保留「支撑落在 $f$ 的纤维紧集里」的那部分，类比积分只在紧区域上才有意义），它有右伴随 $f^!$（对偶）。
合计六个函子：$\otimes,\ \operatorname{Hom},\ f^*,\ f_*,\ f_!,\ f^!$。它们应当满足：

**(i)** $f$ 固有 $\implies f_! = f_*$；**(ii)** $f$ 平展 $\implies f^! = f^*$；

**(iii) Verdier 对偶**：$f_* \operatorname{Hom}_X(A, f^!B) \cong \operatorname{Hom}_Y(f_!A, B)$；

**(iv) 投影公式**：$f_!(A \otimes_X f^*B) \cong f_!A \otimes_Y B$；

> 续见 [nodes/def.six-functors.3.md](./def.six-functors.3.md)
