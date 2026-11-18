# QR Decomposition　`thm.qr-decomposition`
English entry · root `../`
[in graph](../#n=thm.qr-decomposition)　·　[Chinese page (authoritative)](./thm.qr-decomposition.md)

⭐ **Why use QR instead of Gram–Schmidt**: They are mathematically equivalent but differ numerically. Gram–Schmidt can lose orthogonality ($Q^{T}Q$ departs from $I$), so practical algorithms use Householder reflections or Givens rotations to compute $Q$ directly. **Only the mathematical results are covered here** (numerical algorithms are outside the scope).

**Relation to least squares**: $\lVert Ax - b\rVert^{2} = \lVert Rx - Q^{T}b\rVert^{2} + \lVert (I - QQ^{T})b\rVert^{2}$, and the last term is independent of $x$. Thus the least-squares solution is obtained by solving $Rx = Q^{T}b$ (`thm.least-squares`).

> continued in nodes/thm.qr-decomposition.en.5.md
